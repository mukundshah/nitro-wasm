export default defineEventHandler(async () => {

  const image = await fetch('https://images.unsplash.com/photo-1709721821603-8f0f11ce3e0d')
    .then((res) => res.arrayBuffer())
    .then((buffer) => Buffer.from(buffer).toString('base64'))

  const photon = await import('./wasm/photon_rs_bg.wasm' as string)

  return JSON.stringify(photon)
})
