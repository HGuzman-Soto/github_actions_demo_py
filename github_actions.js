const { Octokit } = require("octokit");
require('dotenv').config()

module.exports = {
    private_api_key: process.env.private_api_key
}

const octokit = new Octokit({
    auth: this.private_api_key
})

async function test(){
    const issues = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "HGuzman-Soto",
        repo: "github_actions_demo_py",
    });

    const artifacts = await octokit.request('GET /repos/{owner}/{repo}/actions/artifacts', {
        owner: 'HGuzman-Soto',
        repo: "github_actions_demo_py"
    })
    
    const logs = await octokit.request('GET /repos/{owner}/{repo}/actions/jobs/{job_id}', {
        owner: 'HGuzman-Soto',
        repo: 'github_actions_demo_py',
        job_id: '36090599'
    })
    console.logs(logs)

    // const run = await octokit.request('POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun', {
    //     owner: 'HGuzman-Soto',
    //     repo: 'github_actions_demo_py',
    //     job_id: '5157017696'
    //   })
    // console.log(run)

}
test();