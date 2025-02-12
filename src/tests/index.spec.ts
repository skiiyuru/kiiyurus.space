import { RESUME_LINK } from '@/data/siteData'
import { test, expect } from '@playwright/test'

// test('meta is correct', async ({ page }) => {
//   await page.goto('/')

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Kiiyuru/)
// })

test('View Resume button should open the correct link', async ({
  page,
  context,
}) => {
  await page.goto('/')

  // Find the View Resume button and get its target URL
  const viewResumeLink = await page.locator('text=View Resume')
  const href = await viewResumeLink.getAttribute('href')

  // Expect the href to be specified link
  expect(href).toBe(RESUME_LINK)

  // Click the button and check if it opens the correct page in a new tab
  // const [newPage] = await Promise.all([
  //   context.waitForEvent('page'),
  //   viewResumeLink.click(),
  // ])

  // // Wait for the new page to reach the 'domcontentloaded' state
  // await newPage.waitForLoadState('domcontentloaded')

  // expect(newPage.url()).toBe(RESUME_LINK)

  // await newPage.close()
})
