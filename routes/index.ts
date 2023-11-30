export default defineLazyEventHandler(async () => {
  const { sum } = await importWasm(import("./wasm/sum.wasm" as string));
  return eventHandler(() => {
    return `2+3=${sum(2, 3)}`;
  });
});
