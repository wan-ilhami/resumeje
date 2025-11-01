import { useRef, useState, useEffect } from "react";
import SignaturePad from "signature_pad";

export function SignatureCanvas({ onSave }) {
  const canvasRef = useRef(null);
  const signaturePadRef = useRef(null);
  const signatureBoxRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const translations = {
    signHere: "Sign here",
    clearSignature: "Clear Signature",
    saveSignature: "Save Signature",
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d")?.scale(ratio, ratio);
      if (signaturePadRef.current) {
        signaturePadRef.current.clear();
      }
    }
  };

  const cropSignature = (canvas, box) => {
    const context = canvas.getContext("2d");
    if (!context) return "";

    const rect = box.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();

    const scale = canvas.width / canvasRect.width;
    const x = (rect.left - canvasRect.left) * scale;
    const y = (rect.top - canvasRect.top) * scale;
    const width = rect.width * scale;
    const height = rect.height * scale;

    const tempCanvas = document.createElement("canvas");
    const OUTPUT_WIDTH = 300;
    const OUTPUT_HEIGHT = (height / width) * OUTPUT_WIDTH;
    tempCanvas.width = OUTPUT_WIDTH;
    tempCanvas.height = OUTPUT_HEIGHT;
    const tempContext = tempCanvas.getContext("2d");
    if (!tempContext) return "";

    tempContext.drawImage(canvas, x, y, width, height, 0, 0, OUTPUT_WIDTH, OUTPUT_HEIGHT);
    return tempCanvas.toDataURL("image/png");
  };

  useEffect(() => {
    if (canvasRef.current && !isSaved) {
      resizeCanvas();
      signaturePadRef.current = new SignaturePad(canvasRef.current, {
        minWidth: 0.5,
        maxWidth: 2.5,
        penColor: "black",
        backgroundColor: "rgb(255,255,255)",
        velocityFilterWeight: 0.7,
      });

      signaturePadRef.current.addEventListener("beginStroke", () => setIsEmpty(false));
      signaturePadRef.current.addEventListener("endStroke", () => {
        setIsEmpty(signaturePadRef.current.isEmpty());
      });

      window.addEventListener("resize", resizeCanvas);
      return () => {
        window.removeEventListener("resize", resizeCanvas);
        signaturePadRef.current?.off();
      };
    }
  }, [isSaved]);

  const clear = () => {
    if (isSaved) {
      setIsSaved(false);
      return;
    }
    signaturePadRef.current?.clear();
    setIsEmpty(true);
    onSave("");
  };

  const save = () => {
    if (
      signaturePadRef.current &&
      !signaturePadRef.current.isEmpty() &&
      signatureBoxRef.current &&
      canvasRef.current
    ) {
      const croppedDataUrl = cropSignature(canvasRef.current, signatureBoxRef.current);
      onSave(croppedDataUrl);
      setIsSaved(true);
      signaturePadRef.current.off();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ position: "relative", border: "1px solid #ccc", borderRadius: "8px" }}>
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "200px", touchAction: "none" }}
        />
        <div
          ref={signatureBoxRef}
          style={{
            position: "absolute",
            inset: "20%",
            border: "2px dashed #ccc",
            pointerEvents: "none",
          }}
        >
          {isEmpty && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                fontSize: "14px",
              }}
            >
              {translations.signHere}
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <button
          type="button"
          onClick={clear}
          disabled={isEmpty}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            background: "white",
            cursor: isEmpty ? "not-allowed" : "pointer",
          }}
        >
          {translations.clearSignature}
        </button>

        <button
          type="button"
          onClick={save}
          disabled={isEmpty || isSaved}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            background: "#007bff",
            color: "white",
            cursor: isEmpty || isSaved ? "not-allowed" : "pointer",
            border: "none",
          }}
        >
          {translations.saveSignature}
        </button>
      </div>
    </div>
  );
}