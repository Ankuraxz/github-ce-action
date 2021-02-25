const core = require('@actions/core');
const github = require('@actions/github');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const allowedUser = core.getInput('allowedUser');
    core.info(allowedUser);

    // Get the event payload
    const payload = github.context.payload;
    core.info(JSON.stringify(payload, null, 2));
    const owner = payload.repository.owner.login;
    const repo = payload.repository.name;
    const issueNumber = payload.issue.number;
    const sender = payload.sender.login;

    const body = `Hey ${sender}. Why you label me?

    ![](https://media.giphy.com/media/DfTZWmFpLx3os/source.gif)`
    // Get an Octokit client and pass in our token
    const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body
    });

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
