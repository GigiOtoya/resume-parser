const express = require('express');
const fileUpload = require('express-fileupload');
const xlsx = require('xlsx')
const fs = require('fs')
const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({msg: 'No file uploaded'});
    }

    const file = req.files.file;

    file.mv(`../client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    const wb = xlsx.readFile(`../client/public/uploads/${file.name}`)
    const ws = wb.Sheets['Sheet1']
    const data = xlsx.utils.sheet_to_json(ws)
    console.log(data)
    fs.readFile('../client/src/components/Submissions.json', function(err, res){
        if(res.length == 0){ 
            fs.writeFile('../client/src/components/Submissions.json', JSON.stringify(data,null,1), function(err){
                if(err) console.log('error', err)
            })
        }
        else{
            const json = JSON.parse(res)
            json.push(data[0])
            
            fs.writeFile('../client/src/components/Submissions.json', JSON.stringify(json,null,1), function(err){
                if(err) console.log('error', err)
            })
        }
    })
    
        
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    });
});

app.listen(5000, () => console.log('Server Started...'));