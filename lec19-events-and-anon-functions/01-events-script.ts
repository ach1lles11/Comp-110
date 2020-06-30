import "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

let svgTag: SVG = new SVG("artboard");
// The following setting turns off auto-scaling of graphics.
svgTag.autoScale = false;

function main(): void {
    let scene: Group = new Group();

    let circle: Circle = new Circle(30, 0, 0);
    scene.add(circle);
    
    svgTag.render(scene);

    // TODO: Register window Events
    window.onkeydown = function(event: KeyboardEvent): void {
        if (event.keyCode === 40) {
            circle.cy += 20;
        }
    };

    window.onmousemove = function(event: MouseEvent): void {
        circle.cx = event.clientX;
        circle.cy = event.clientY;
    };
}

// TODO: Add a MouseEvent Handler

// TODO: Add a KeyboardEvent Handler

main();