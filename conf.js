// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./test/e2e/controllers/LoginTest.js', './test/e2e/controllers/ChatTest.js']
}
