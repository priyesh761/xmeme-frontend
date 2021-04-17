# xmeme-frontend

A meme stream where every one can add memes

Frontend Deployment link - https://x-meme-priyesh.netlify.app/

Backend api Deployment link - https://xmeme-backend-v2.herokuapp.com/<endpoint\>

Backend api endpoints - 

|   Endpoint  | Method | Request body fields |       Response body fieds       | Error status code |    Error message   |
|:-----------:|:------:|:-------------------:|:-------------------------------:|:-----------------:|:------------------:|
|    /memes   |  POST  |  name, url, caption |   unique id for inserted meme   |        400        |     Bad request    |
|    /memes?pageNo=<number\>   |   GET  |          -          | JSON array of data for given pageNumber  |         -         |          -         |
| /memes/<id\> |   GET  |          -          |  JSON object for specified meme |        404        | Resource not found |
| /memes/<id\> |  PATCH |     url, caption    |                -                |        404        | Resource not found |
