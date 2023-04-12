export default defineEventHandler((event) => {
  //   參數有問題就拋出異常
  const id = parseInt(event.context.params!.id) as number;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      message: 'ID 應該是一個整數',
    });
  }
  return 'ok';
});
