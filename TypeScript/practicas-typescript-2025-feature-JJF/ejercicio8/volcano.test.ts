import { addColor, erupt } from "./volcano"

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function fillVolcano(width: number, height: number): number[][] {
    return new Array(width).fill([]).map(() => Array(height).fill(0).map(() => getRandomInt(1, 9)))
}

function fillCanvas(width: number, height: number): string[][] {
    return new Array(width).fill([]).map(() => Array(height).fill(0).map(() => '-'))

}

describe('erupt', () => {
    it('* in eruption point', () => {
        const volcano = fillVolcano(5, 7)
        const canvas = fillCanvas(5, 7)

        const newCanvas = erupt(2, 3, canvas, volcano)
        expect(newCanvas[2][3]).toBe('*')
    })
})

describe('addColor', () => {
    it('check colors', () => {
        const volcano = fillVolcano(5, 7)
        const canvas = fillCanvas(5, 7)

        const newCanvas = addColor(erupt(2, 3, canvas, volcano))

        const alwaysColored = newCanvas
            .every((row: string[]) => row.every(cell =>
                cell.startsWith('\x1b[31m') || cell.startsWith('\x1b[32m')))
        expect(alwaysColored).toBe(true)
    })

    it('has red point in erupt point', () => {
        const volcano = fillVolcano(5, 7)
        const canvas = fillCanvas(5, 7)

        const newCanvas = addColor(erupt(2, 3, canvas, volcano))

        expect(newCanvas[2][3].startsWith('\x1b[31m')).toBe(true)
    })
})
