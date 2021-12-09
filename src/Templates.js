export function solitaireTemplates(x, y) {
    return {
        sides: [
            'front',
            'back', 'front',
            'back', 'back', 'front',
            'back', 'back', 'back', 'front',
            'back', 'back', 'back', 'back', 'front',
            'back', 'back', 'back', 'back', 'back', 'front',
            'back', 'back', 'back', 'back', 'back', 'back', 'front'
        ],
        positions: [
            { x: x, y: y },
            { x: x + 150, y: y }, { x: x + 150, y: y + 50 },
            { x: x + 300, y: y }, { x: x + 300, y: y + 50 }, { x: x + 300, y: y + 100 },
            { x: x + 450, y: y }, { x: x + 450, y: y + 50 }, { x: x + 450, y: y + 100 }, { x: x + 450, y: y + 150 },
            { x: x + 600, y: y }, { x: x + 600, y: y + 50 }, { x: x + 600, y: y + 100 }, {
                x: x + 600,
                y: y + 150
            }, { x: x + 600, y: y + 200 },
            { x: x + 750, y: y }, { x: x + 750, y: y + 50 }, { x: x + 750, y: y + 100 }, {
                x: x + 750,
                y: y + 150
            }, { x: x + 750, y: y + 200 }, { x: x + 750, y: y + 250 },
            { x: x + 900, y: y }, { x: x + 900, y: y + 50 }, { x: x + 900, y: y + 100 }, {
                x: x + 900,
                y: y + 150
            }, { x: x + 900, y: y + 200 }, { x: x + 900, y: y + 250 }, { x: x + 900, y: y + 300 }
        ],
        defaultLocation: {
            x: x + 900,
            y: 20
        }
    };
}

export function pyramidTemplates(x, y) {
    return {
        sides: [
            'front',
            'front', 'front',
            'front', 'front', 'front',
            'front', 'front', 'front', 'front',
            'front', 'front', 'front', 'front', 'front',
            'front', 'front', 'front', 'front', 'front', 'front',
            'front', 'front', 'front', 'front', 'front', 'front', 'front',
            'front', 'front'
        ],
        positions: [
            { x: x, y: y },
            { x: x - 107.25, y: y + 60 }, { x: x + 107.25, y: y + 60 },
            { x: x - 214.5, y: y + 180 }, { x: x, y: y + 180 }, { x: x + 214.5, y: y + 180 },
            { x: x - 321.75, y: y + 240 }, { x: x - 107.25, y: y + 240 }, { x: x + 107.25, y: y + 240 }, {
                x: x + 321.75,
                y: y + 240
            },
            { x: x - 429, y: y + 360 }, { x: x - 214.5, y: y + 360 }, { x: x, y: y + 360 }, {
                x: x + 214.5,
                y: y + 360
            }, { x: x + 429, y: y + 360 },
            { x: x + 520, y: y }
        ],
        defaultLocation: {
            x: x + 400,
            y: y
        }
    };
}

export function freeModeTemplates(x, y) {
    return {
        sides: [],
        positions: [],
        defaultLocation: { x: x, y: y }
    };
}
