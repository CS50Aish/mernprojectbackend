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
labuser@ubuntu2204:~/Desktop/mernprojectbackend/node-projects/project4$ node index.js 
TAP version 13
# Subtest: synchronous passing test
ok 1 - synchronous passing test
  ---
  duration_ms: 5.369056
  ...
# Subtest: synchronous failing test
not ok 2 - synchronous failing test
  ---
  duration_ms: 2.108861
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
  duration_ms: 0.122304
  ...
# Subtest: asynchronous failing test
not ok 4 - asynchronous failing test
  ---
  duration_ms: 0.448113
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
  duration_ms: 9.001362
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
  duration_ms: 0.33111
  ...
# Subtest: callback failing test
not ok 7 - callback failing test
  ---
  duration_ms: 1.303438
  failureType: 'testCodeFailure'
  error: 'callback failure'
  code: 'ERR_TEST_FAILURE'
  stack: |-
    Immediate.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:47:14)
    process.processImmediate (node:internal/timers:478:21)
  ...
# Subtest: ROOT LEVEL Test
    # Subtest: SubTest 1
    ok 1 - SubTest 1
      ---
      duration_ms: 0.152704
      ...
    # Subtest: SubTest 2
    ok 2 - SubTest 2
      ---
      duration_ms: 0.185706
      ...
    1..2
ok 8 - ROOT LEVEL Test
  ---
  duration_ms: 0.69062
  ...
1..8
# tests 8
# pass 4
# fail 4
# cancelled 0
# skipped 0
# todo 0
# duration_ms 29.278051
labuser@ubuntu2204:~/Desktop/mernprojectbackend/node-projects/project4$ node index.js 
TAP version 13
# Subtest: synchronous passing test
ok 1 - synchronous passing test
  ---
  duration_ms: 5.552548
  ...
# Subtest: synchronous failing test
not ok 2 - synchronous failing test
  ---
  duration_ms: 2.091556
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
  duration_ms: 0.123504
  ...
# Subtest: asynchronous failing test
not ok 4 - asynchronous failing test
  ---
  duration_ms: 0.451512
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
  duration_ms: 9.592356
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
  duration_ms: 0.310009
  ...
# Subtest: callback failing test
not ok 7 - callback failing test
  ---
  duration_ms: 1.295334
  failureType: 'testCodeFailure'
  error: 'callback failure'
  code: 'ERR_TEST_FAILURE'
  stack: |-
    Immediate.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:47:14)
    process.processImmediate (node:internal/timers:478:21)
  ...
# Subtest: ROOT LEVEL Test
    # Subtest: SubTest 1
    ok 1 - SubTest 1
      ---
      duration_ms: 0.219206
      ...
    # Subtest: SubTest 2
    ok 2 - SubTest 2
      ---
      duration_ms: 0.106702
      ...
    1..2
ok 8 - ROOT LEVEL Test
  ---
  duration_ms: 0.616816
  ...
# Subtest: skip option
ok 9 - skip option # SKIP
  ---
  duration_ms: 0.070802
  ...
# Subtest: skip option with message
ok 10 - skip option with message # SKIP this is skipped
  ---
  duration_ms: 0.190205
  ...
1..10
# tests 10
# pass 4
# fail 4
# cancelled 0
# skipped 2
# todo 0
# duration_ms 39.819664

labuser@ubuntu2204:~/Desktop/mernprojectbackend/node-projects/project4$ node index.js 
TAP version 13
# Subtest: synchronous passing test
ok 1 - synchronous passing test
  ---
  duration_ms: 6.165584
  ...
# Subtest: synchronous failing test
not ok 2 - synchronous failing test
  ---
  duration_ms: 2.135663
  failureType: 'testCodeFailure'
  error: |-
    Expected values to be strictly equal:
    
    4 !== 6
    
  code: 'ERR_ASSERTION'
  expected: 6
  actual: 4
  operator: 'strictEqual'
  stack: |-
    TestContext.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:14:12)
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
  duration_ms: 0.120103
  ...
# Subtest: asynchronous failing test
not ok 4 - asynchronous failing test
  ---
  duration_ms: 0.465714
  failureType: 'testCodeFailure'
  error: |-
    Expected values to be strictly equal:
    
    7 !== 8
    
  code: 'ERR_ASSERTION'
  expected: 8
  actual: 7
  operator: 'strictEqual'
  stack: |-
    TestContext.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:24:12)
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
  duration_ms: 9.756391
  failureType: 'uncaughtException'
  error: 'reject is not a function'
  code: 'ERR_TEST_FAILURE'
  stack: |-
    Immediate.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:32:17)
    process.processImmediate (node:internal/timers:478:21)
  ...
# Subtest: callback passing test
ok 6 - callback passing test
  ---
  duration_ms: 0.423713
  ...
# Subtest: callback failing test
not ok 7 - callback failing test
  ---
  duration_ms: 3.809214
  failureType: 'testCodeFailure'
  error: 'callback failure'
  code: 'ERR_TEST_FAILURE'
  stack: |-
    Immediate.<anonymous> (/home/labuser/Desktop/mernprojectbackend/node-projects/project4/index.js:48:14)
    process.processImmediate (node:internal/timers:478:21)
  ...
# Subtest: ROOT LEVEL Test
    # Subtest: SubTest 1
    ok 1 - SubTest 1
      ---
      duration_ms: 0.227007
      ...
    # Subtest: SubTest 2
    ok 2 - SubTest 2
      ---
      duration_ms: 0.106903
      ...
    1..2
ok 8 - ROOT LEVEL Test
  ---
  duration_ms: 0.67462
  ...
# Subtest: skip option
ok 9 - skip option # SKIP
  ---
  duration_ms: 0.066602
  ...
# Subtest: skip option with message
ok 10 - skip option with message # SKIP this is skipped
  ---
  duration_ms: 0.060002
  ...
# Subtest: Test A with all possible tests
    # Subtest: should work
    ok 1 - should work
      ---
      duration_ms: 0.218707
      ...
    # Subtest: should be ok
    ok 2 - should be ok
      ---
      duration_ms: 0.079002
      ...
    # Subtest: a nested thing
        # Subtest: should work
        ok 1 - should work
          ---
          duration_ms: 0.159705
          ...
        1..1
    ok 3 - a nested thing
      ---
      duration_ms: 2.01116
      ...
    1..3
ok 11 - Test A with all possible tests
  ---
  duration_ms: 2.65638
  ...
1..11
# tests 11
# pass 5
# fail 4
# cancelled 0
# skipped 2
# todo 0
# duration_ms 48.230638