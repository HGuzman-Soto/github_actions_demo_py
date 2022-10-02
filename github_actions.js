const { Octokit } = require("octokit");
require('dotenv').config()

module.exports = {
    private_api_key: process.env.private_api_key
}

const octokit = new Octokit({
    auth: this.private_api_key
})

async function test(){
    await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "HGuzman-Soto",
        repo: "github_actions_demo_py",
    });

    const test = await octokit.request('GET /repos/{owner}/{repo}/actions/artifacts', {
        owner: 'HGuzman-Soto',
        repo: "github_actions_demo_py"
    })
    console.log(test);
}
test();