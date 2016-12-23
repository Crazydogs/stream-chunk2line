# stream-chunk2line
一个 Transform 流，用于将 fs.createReadStream() 生成的流转化为每个 chunk 包含一行的流。

PS：如果读取的文件一行很长，并不适合使用这个项目。
