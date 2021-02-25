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

    // Get an Octokit client and pass in our token

    // Write back a comment on the labeled issue

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
