import { test, expect } from '@playwright/test'

test('form submission works', async ({ page }) => {
  await page.goto('http://localhost:9000') // เปลี่ยนตาม port ที่คุณใช้

  await page.fill('input[label="Name"]', 'Angkun')
  await page.fill('input[label="Surname"]', 'Srisuk')
  await page.check('text=I accept the terms')
  await page.click('button[type="submit"]')

  await expect(page).toHaveURL(/.*localhost.*/)
})