export default function AnnotationCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-(--cs-red-light) border border-(--cs-red-border) flex items-start overflow-hidden p-3 rounded-2xl">
            <p className="font-(family-name:--font-geist) font-medium leading-normal text-(--cs-red-dark) text-sm md:text-base">
                {children}
            </p>
        </div>
    );
}
