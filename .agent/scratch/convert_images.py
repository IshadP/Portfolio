import os
from PIL import Image

def convert_images_to_webp(root_dir):
    extensions_to_convert = ('.png', '.jpg', '.jpeg', '.avif')
    converted_count = 0
    skipped_count = 0
    error_count = 0

    print(f"Scanning for images in {root_dir}...")

    for root, dirs, files in os.walk(root_dir):
        for file in files:
            file_lower = file.lower()
            if file_lower.endswith(extensions_to_convert):
                src_path = os.path.join(root, file)
                
                # Check for specific files we should avoid converting, if any
                # e.g., icons that must remain SVG, but those aren't in our extensions list anyway.
                
                dest_name = os.path.splitext(file)[0] + ".webp"
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
                    
                    # Verify the converted file exists and is not empty
                    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
                        os.remove(src_path)
                        print(f"Successfully converted and removed original: {file}")
                        converted_count += 1
                    else:
                        print(f"Error: Converted file {dest_name} is invalid/empty. Keeping original.")
                        error_count += 1
                except Exception as e:
                    print(f"Failed to convert {file}: {e}")
                    error_count += 1
            else:
                if file_lower.endswith('.webp'):
                    skipped_count += 1

    print("\n--- Summary ---")
    print(f"Successfully Converted: {converted_count}")
    print(f"Already WebP (Skipped): {skipped_count}")
    print(f"Errors Encountered: {error_count}")

if __name__ == "__main__":
    public_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "public"))
    if not os.path.exists(public_dir):
        # fallback if run from workspace root
        public_dir = os.path.abspath("public")
    convert_images_to_webp(public_dir)
