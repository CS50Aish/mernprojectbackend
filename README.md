# mernprojectbackend
Developing Reliable Backend MERN Stack Development

labuser@ubuntu2204:~/Desktop/mernprojectbackend/node-projects/project4$ npm install test

up to date, audited 79 packages in 747ms

58 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
labuser@ubuntu2204:~/Desktop/mernprojectbackend/node-projects/project4$ node index.js 
TAP version 13
# Subtest: synchronous passing test
ok 1 - synchronous passing test
  ---
  duration_ms: 5.422147
  ...
# Subtest: synchronous failing test
not ok 2 - synchronous failing test
  ---
  duration_ms: 2.171559
  failureType: 'testCodeFailure'
  error: |-
    Expected values to be strictly equal:
    
    4 !== 6
    
  code: 'ERR_ASSERTION'
  expected: 6
  actual: 4
  operator: 'strictEqual'
  stack: |-
    TestContext.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:13:12)
    Test.runInAsyncScope (node:async_hooks:206:9)
    exports.ReflectApply (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/per_context/primordials.js:82:56)
    Test.run (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/test_runner/test.js:538:25)
    Test.processPendingSubtests (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/test_runner/test.js:293:27)
    Test.postRun (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/test_runner/test.js:623:19)
    Test.run (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/test_runner/test.js:566:10)
  ...
# Subtest: asynchronous passing test
ok 3 - asynchronous passing test
  ---
  duration_ms: 0.135704
  ...
# Subtest: asynchronous failing test
not ok 4 - asynchronous failing test
  ---
  duration_ms: 0.473812
  failureType: 'testCodeFailure'
  error: |-
    Expected values to be strictly equal:
    
    7 !== 8
    
  code: 'ERR_ASSERTION'
  expected: 8
  actual: 7
  operator: 'strictEqual'
  stack: |-
    TestContext.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:23:12)
    Test.runInAsyncScope (node:async_hooks:206:9)
    exports.ReflectApply (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/per_context/primordials.js:82:56)
    Test.run (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/test_runner/test.js:538:25)
    Test.processPendingSubtests (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/test_runner/test.js:293:27)
    Test.postRun (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/test_runner/test.js:623:19)
    Test.run (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/test_runner/test.js:566:10)
    async Test.processPendingSubtests (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/node_modules/test/lib/internal/test_runner/test.js:293:7)
  ...
# Subtest: failing test using promises
not ok 5 - failing test using promises
  ---
  duration_ms: 9.753563
  failureType: 'uncaughtException'
  error: 'reject is not a function'
  code: 'ERR_TEST_FAILURE'
  stack: |-
    Immediate.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:31:17)
    process.processImmediate (node:internal/timers:478:21)
  ...
# Subtest: callback passing test
ok 6 - callback passing test
  ---
  duration_ms: 0.409311
  ...
# Subtest: callback failing test
not ok 7 - callback failing test
  ---
  duration_ms: 1.427438
  failureType: 'testCodeFailure'
  error: 'callback failure'
  code: 'ERR_TEST_FAILURE'
  stack: |-
    Immediate.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:47:14)
    process.processImmediate (node:internal/timers:478:21)
  ...
1..7
# tests 7
# pass 3
# fail 4
# cancelled 0
# skipped 0
# todo 0
# duration_ms 23.69674
