document.querySelectorAll(".image-compare").forEach(el => {
    const images = el.querySelectorAll("img");
    images.forEach(img => {
        img.draggable = false;
    })

    if (images.length < 2) return;

    let dragging = false;

    const setPosition = clientX => {
        const rect = el.getBoundingClientRect();
        let pos = ((clientX - rect.left) / rect.width) * 100;
        pos = Math.max(0, Math.min(100, pos));
        el.style.setProperty("--position", `${pos}%`);
    };

    el.setAttribute("tabindex", "0");

    el.addEventListener("pointerdown", e => {
        dragging = true;
        el.style.cursor = "grabbing";
        el.setPointerCapture(e.pointerId);
        setPosition(e.clientX);
    });

    el.addEventListener("pointermove", e => {
        if (dragging) setPosition(e.clientX);
    });

    el.addEventListener("pointerup", () => { dragging = false; el.style.cursor = "ew-resize" });
    el.addEventListener("pointercancel", () => dragging = false);
    el.addEventListener("pointerleave", () => dragging = false);

    el.addEventListener("keydown", e => {
        const step = 2;
        const current = parseFloat(
            getComputedStyle(el).getPropertyValue("--position")
        );

        if (e.key === "ArrowLeft") {
            el.style.setProperty("--position", `${Math.max(0, current - step)}%`);
        }

        if (e.key === "ArrowRight") {
            el.style.setProperty("--position", `${Math.min(100, current + step)}%`);
        }
    });
});