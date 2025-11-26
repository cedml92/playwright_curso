// @ts-check
import { test, expect } from '@playwright/test';

const email = 'teste@gmail.com';
const senha = '123456';

//Pre-condição
test.beforeEach(async ({page}) => {

  // Acessando o site
  await page.goto('https://automationpratice.com.br/')

    // esperando que pagima tenha um titulo.  
  await expect(page).toHaveTitle('QAZANDO Shop E-Commerce')

    //rolar até o nome do texto NEWSLETTER
  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded() 

    // clica no botão login
  await page.getByRole('link', { name: 'login' }).click()

})

  //Acessando o siste
test('Acessando o Site e Realizando Login @teste', async ({ page }) => {

  // esperando o baneer ser visivel.  
  //await expect(page.getByText('Qazando')).toBeVisible()


  //rolar até o botão send email
  //const button = await page.getByRole('button', { name: 'Send Mail' })
  //await button.scrollIntoViewIfNeeded()
  //await button.click()

  // Digita e-mail
  await page.locator('#user').click()
  await page.locator('#user').fill(email)
  // Digita senha
  await page.locator('#password').click()
  await page.locator('#password').fill(senha)
  //Clica no botão Login
  await page.getByRole('button', { name: 'login' }).click()
  //Valida mensagem Login realizado    
  await expect(page.getByText('Login realizado')).toBeVisible()
  //Clica no botao OK
  await page.getByRole('button', { name: 'OK' }).click()
  // valida pagina acessada
  await expect(page.getByRole('link', { name: ' Acompanhe seu pedido' })).toBeVisible()
  
})

//Pós-condição
test.afterEach (async ({page}) => {

  
})
