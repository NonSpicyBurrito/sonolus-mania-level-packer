export { default as db } from '@sonolus/free-pack/pack/db.json'

export const repository = Object.entries(
    import.meta.glob('@sonolus/free-pack/pack/repository/*', {
        query: '?arraybuffer',
        import: 'default',
        eager: true,
    }),
).map(([path, buffer]) => ({
    filename: path.slice(path.lastIndexOf('/') + 1),
    buffer: buffer as ArrayBuffer,
}))

export { default as engineConfiguration } from 'sonolus-mania-engine/EngineConfiguration?arraybuffer'
export { default as enginePlayData } from 'sonolus-mania-engine/EnginePlayData?arraybuffer'
export { default as enginePreviewData } from 'sonolus-mania-engine/EnginePreviewData?arraybuffer'
export { default as engineThumbnail } from 'sonolus-mania-engine/EngineThumbnail?arraybuffer'
export { default as engineTutorialData } from 'sonolus-mania-engine/EngineTutorialData?arraybuffer'
export { default as engineWatchData } from 'sonolus-mania-engine/EngineWatchData?arraybuffer'
