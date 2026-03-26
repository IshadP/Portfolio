import { useEffect } from "react";
import { useCopyEmail } from "./useCopyEmail";
import { useKeyboardPress } from "./useKeyboardPress";

export function useEmailShortcut() {
    const isPressed = useKeyboardPress('c');
    const { copy, copied } = useCopyEmail();

    useEffect(() => {
        if (isPressed) {
            copy();
        }
    }, [isPressed, copy]);

    return { isPressed, copied, copy };
}
