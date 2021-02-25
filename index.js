const core = require('@actions/core');
const github = require('@actions/github');


// most @actions toolkit packages have async methods
async function run() {
  try {
    // Get the event payload

    // Get an Octokit client and pass in our token

    // Write back a comment on the labeled issue

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
