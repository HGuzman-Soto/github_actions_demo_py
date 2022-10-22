const { Octokit } = require("octokit");
require('dotenv').config()

module.exports = {
    private_api_key: process.env.private_api_key
}

const octokit = new Octokit({
    auth: this.private_api_key
})

// get workflow run attempt - https://docs.github.com/en/rest/actions/workflow-runs#get-a-workflow-run-attempt
async function getWorkflowRunAttempt() {
    const workflowAttempt =  await octokit.request('GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}', {
        owner: 'HGuzman-Soto',
        repo: 'github_actions_demo_py',
        run_id: '19320103',
        attempt_number: '1'
    })
    console.log(workflowAttempt)
}

// get downloads of logs for workflow run attempt - https://docs.github.com/en/rest/actions/workflow-runs#download-workflow-run-attempt-logs
async function getWorkflowRunAttemptLogs() {
    const workflowAttemptLogs = await octokit.request('GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs', {
        owner: 'HGuzman-Soto',
        repo: 'github_actions_demo_py',
        run_id: 'RUN_ID',
        attempt_number: 'ATTEMPT_NUMBER'
    })
    console.log(workflowLogs)
}

// get download of logs for workflow - https://docs.github.com/en/rest/actions/workflow-runs#download-workflow-run-logs
async function getWorkflowRunLogs() {
    const workflowLogs = await octokit.request('GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs', {
        owner: 'HGuzman-Soto',
        repo: 'github_actions_demo_py',
        run_id: '3167104135'
    })
    console.log(workflowLogs)
}