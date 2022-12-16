const ElementUtils =
{
  keygen: (prefix: string = "") =>
  {
    const epoch: number = new Date().getTime();
    const bucket: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let result: string = `${ prefix }${ epoch.toString(16) }-`;
    for (let i = 0; i < 15; i++)
    {
      const index = Math.floor(Math.random() * bucket.length);
      result += bucket[ index ];
    }

    console.log(result);

    return result;
  },
};

export default ElementUtils;