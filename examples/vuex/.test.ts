//*
import { skip } from '@brillout/test-e2e'
skip('SKIPPED until it supports Vite 4')
/*/
import { fetchHtml, run, test, expect, skip } from '@brillout/test-e2e'
run('npm run dev')

test('page content is rendered to HTML', async () => {
  const html = await fetchHtml('/')
  expect(html).toContain('<h1>To-do List</h1>')
  expect(html).toContain('<li>Buy milk</li><li>Buy chocolate</li>')
  expect(html).toContain('"INITIAL_STATE":{"todoList":[{"id":0,"text":"Buy milk"},{"id":1,"text":"Buy chocolate"}]}')
})
//*/
