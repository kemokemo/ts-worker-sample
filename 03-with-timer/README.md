# Typescript WebWorker Sample

This is my sample repo to use WebWorker with Typescript.

![Sequence of this sample](media/sequence-of-this-sample.svg)

`*1` part can also be modified to send data to the backend to make the data storage persistent.

In this sample, the message is sent back to the main thread with the response comment immediately to check the inter-thread processing and the reflection process to the UI.

## Build

```sh
npm i
```

```sh
npm run build
```

For the build process, we use [esbuild](https://github.com/evanw/esbuild), which runs very fast. See [scripts/build.js](https://github.com/kemokemo/ts-worker-sample/blob/main/scripts/build.js) for detailed instructions.

If you develop and debug, please use `build-dev` to generate map file.

```sh
npm run build-dev
```

## Run

You can use a small tool like [miniweb](https://github.com/kemokemo/miniweb) to serve the files.

```sh
miniweb -p 9000 dist
```

