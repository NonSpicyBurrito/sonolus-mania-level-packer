import { mcToLevelData, osuToMC } from 'sonolus-mania-engine'
import type { PackLevelData } from '.'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    const mc = osuToMC(await chart.text())
    const levelData = mcToLevelData(mc, offset)

    return { type: 'json', data: levelData }
}
