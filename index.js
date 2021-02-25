const core = require('@actions/core');
const github = require('@actions/github');


// most @actions toolkit packages have async methods
async function run() {
  try {
    // Get the event payload

    // Write back a comment on the labeled issue

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
