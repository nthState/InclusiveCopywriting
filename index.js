const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

function checkFile(file, words) {
    try {
    
        core.info('Reading...${file}')

        fs.readFile(file, 'utf-8', (err, data) => {
            const lines = data.split('\n')

            for (let line of lines) {
                const tokens = new Set(dataline.split(' '))
                let intersection = new Set([...tokens].filter(x => words.has(x)));
                if (intersection.count > 0) {
                    return file
                }
            }

        });
        
    } catch (err) {
        core.info('Error...${err}')
    }
    
    return ""
}

async function main() {
    try {
        const src = core.getInput('src');
        const words = new Set((core.getInput('words') || '').split(',').map(t => t.trim()))
        const fileTypeFilter = core.getInput('fileTypeFilter');

        core.info('Starting...')
        
        const filesList = fs.readdirSync(src, (err, files) => files.filter((e) => path.extname(e).toLowerCase() === fileTypeFilter));
 
        const output = filesList.map(file => checkFile(file, words))

        core.setOutput("files", []);

    } catch (error) {
      core.setFailed(error.message);
    }
}

main()