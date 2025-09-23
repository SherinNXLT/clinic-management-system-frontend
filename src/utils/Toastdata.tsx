import toast from "react-hot-toast";

export const showToast = (type: "success" | "error" | "warning" | "info", message?: string): void => {
    switch (type) {
        case "success":
            toast.success(message || "🎉 Success! Operation completed.");
            break;
        case "warning":
            toast(message || "⚠️ Warning! Check your input.", { icon: "⚠️" });
            break;
        case "info":
            toast(message || "ℹ️ Info! Here's a message.", { icon: "ℹ️" });
            break;
        default:
            toast.error(message || "❌ Error! Something went wrong.");
            break;
    }
};


export const showConfirmToast = (message: string, onConfirm: () => void) => {
    toast.custom((t) => (
        <div
            style={{
                padding: "16px",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}
            aria-live="off" // Prevents screen readers delay
        >
            <span>{message}</span>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                    style={{ padding: "6px 12px", background: "#ccc", borderRadius: "4px", border: "none" }}
                    onClick={() => toast.dismiss(t.id)}
                >
                    Cancel
                </button>
                <button
                    style={{ padding: "6px 12px", background: "#4caf50", color: "#fff", borderRadius: "4px", border: "none" }}
                    onClick={() => {
                        onConfirm();
                        toast.dismiss(t.id);
                    }}
                >
                    Confirm
                </button>
            </div>
        </div>
    ), {
        duration: Infinity, // keep open until user acts
        position: "top-center",
    });
};
