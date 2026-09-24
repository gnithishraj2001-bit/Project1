import { test, expect } from '../Fixtures/setup'

test('Fixture', async ({ loginPage }) => {

    await expect(loginPage).toHaveURL(/SearchHotel/)

})