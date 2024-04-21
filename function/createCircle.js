

// Factory function
function createCircle(radius) {
    return {
        // radius, or
        radius : radius,
        // draw : function() {
        //     console.log('Drawing a circle with radius ' + this.radius);
        // }, or
        draw () {
            console.log('Drawing a circle with radius ' + this.radius);
        }

    };
}


const circle1 = createCircle(1);
circle1.draw();