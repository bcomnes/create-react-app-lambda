export function handler(event, context, callback) {
  console.log(`Request from ${event.headers.referer}`)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: "Hello, World!"})
  })
}
