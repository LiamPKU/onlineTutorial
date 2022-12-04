import * as fs from 'fs'
export const getVideo = async (req,res) =>{
    try {
        console.log('running')
        fs.readFile('./food.mp4',function(err,data){
            if(err){
                console.log(err.stack)
                return
            }
            console.log('sending')
            res.send(data)
            res.end()
        })
        // stream type
    //   const range = req.headers.range;
    //   const videoPath = './food.mp4'
    //   const videoSize = fs.statSync(videoPath).size;
    //   const chunkSize = 3 * 1e6;
    //   const start = Number(range.replace(/\D/g, ""));
    //   const end = Math.min(start + chunkSize, videoSize - 1);
    //   const contentLength = end - start + 1;
    //   const headers = {
    //     "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    //     "Accept-Ranges": "bytes",
    //     "Content-Length": contentLength,
    //     "Content-Type": "video/mp4"
    //     }
    //   console.log("sending content")
    //   res.writeHead(206, headers);
    //   const stream = fs.createReadStream(videoPath, { start, end });
    //   stream.pipe(res);

    // direct url
    //   res.status(200).json({video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong" });
    }
}