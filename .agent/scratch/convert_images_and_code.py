import os
import re
from PIL import Image

def convert_images_to_webp(root_dir):
    converted_files = set()
    skipped_files = set()
    error_files = set()
    
    # Exclude footer png files
    exclude_filenames = {'x', 'linkedin', 'behance'}
    
    print(f"Scanning for PNG images in {root_dir}...")
    
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            file_lower = file.lower()
            if file_lower.endswith('.png'):
                base_name = os.path.splitext(file)[0]
                if base_name.lower() in exclude_filenames:
                    print(f"Skipping footer PNG: {file}")
                    skipped_files.add(file)
                    continue
                
                src_path = os.path.join(root, file)
                dest_name = base_name + ".webp"
                dest_path = os.path.join(root, dest_name)
                
                print(f"Converting: {src_path} -> {dest_path}")
                try:
                    with Image.open(src_path) as img:
                        # Convert palette image with transparency to RGBA
                        if img.mode in ('P', 'RGBA'):
                            img_to_save = img.convert('RGBA')
                        else:
                            img_to_save = img.convert('RGB')
                        
                        img_to_save.save(dest_path, 'WEBP', quality=90)
                    
                    # Verify conversion
                    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
                        os.remove(src_path)
                        print(f"Successfully converted and removed original: {file}")
                        converted_files.add(file)
                    else:
                        print(f"Error: Converted file {dest_name} is invalid. Keeping original.")
                        error_files.add(file)
                except Exception as e:
                    print(f"Failed to convert {file}: {e}")
                    error_files.add(file)
                    
    return converted_files

def update_code_references(src_dir, converted_files):
    exclude_filenames = {'x', 'linkedin', 'behance'}
    pattern = re.compile(r'([^\s\'"`]+)\.[pP][nN][gG]')
    
    def replacer(match):
        path_prefix = match.group(1)
        # Extract the base filename
        base = path_prefix.split('/')[-1].split('\\')[-1]
        
        # Check if it should be excluded
        if base.lower() in exclude_filenames:
            return match.group(0) # Return original (e.g. x.png)
            
        # Otherwise, replace .png with .webp
        return path_prefix + ".webp"
        
    updated_count = 0
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.css', '.json', '.html', '.md')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Find if there are replacements to make
                    new_content, count = pattern.subn(replacer, content)
                    if count > 0:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated {count} reference(s) in {file_path}")
                        updated_count += 1
                except Exception as e:
                    print(f"Error reading/writing {file_path}: {e}")
                    
    print(f"\nUpdated references in {updated_count} files.")

if __name__ == "__main__":
    public_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "public"))
    if not os.path.exists(public_dir):
        public_dir = os.path.abspath("public")
        
    src_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "src"))
    if not os.path.exists(src_dir):
        src_dir = os.path.abspath("src")
        
    converted = convert_images_to_webp(public_dir)
    print(f"\nConverted {len(converted)} files.")
    
    print("\nUpdating code references...")
    update_code_references(src_dir, converted)
    print("Done!")
