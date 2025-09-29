document.addEventListener('DOMContentLoaded', () => {

    const svgCanvas = document.getElementById('drawing-canvas');

    // State variables
    let isDrawing = false;      // Is the mouse button currently pressed?
    let currentPath = null;     // The <path> element being drawn
    let pathData = '';          // The 'd' attribute data for the current path

    // Function to get mouse coordinates relative to the SVG canvas
    const getMousePosition = (event) => {
        const rect = svgCanvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    };

    // --- Event Listeners ---

    // MOUSE DOWN: Start drawing
    svgCanvas.addEventListener('mousedown', (event) => {
        isDrawing = true;
        const { x, y } = getMousePosition(event);

        // Start a new path
        pathData = `M ${x} ${y}`; // Move to the starting point
        
        // Create a new <path> element
        currentPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        currentPath.setAttribute('d', pathData);
        currentPath.setAttribute('stroke', '#007bff'); // Line color
        currentPath.setAttribute('stroke-width', '3');  // Line thickness
        currentPath.setAttribute('fill', 'none');       // No fill color

        // Add the new path to the canvas
        svgCanvas.appendChild(currentPath);
    });

    // MOUSE MOVE: Continue drawing
    svgCanvas.addEventListener('mousemove', (event) => {
        if (!isDrawing) return; // Do nothing if the mouse is not down

        const { x, y } = getMousePosition(event);
        
        // Add a new point to the path data
        pathData += ` L ${x} ${y}`; // Line to the new point
        
        // Update the path on the canvas in real-time
        currentPath.setAttribute('d', pathData);
    });

    // MOUSE UP: Stop drawing
    svgCanvas.addEventListener('mouseup', () => {
        isDrawing = false;
        currentPath = null; // Reset current path
    });
    
    // MOUSE LEAVE: Also stop drawing if the mouse leaves the canvas
    svgCanvas.addEventListener('mouseleave', () => {
        isDrawing = false;
        currentPath = null; // Reset current path
    });

});