# Configuração do WhatsApp - D'Arlin Marcenaria

## Como Alterar o Número do WhatsApp

Para configurar o número correto do WhatsApp da D'Arlin, você precisa editar o arquivo `src/App.jsx` na linha 68.

### Localização do Código
```javascript
// Número do WhatsApp da D'Arlin (substitua pelo número real)
const numeroWhatsApp = '5511999999999' // Formato: código do país + DDD + número
```

### Formato Correto
O número deve seguir o formato internacional:
- **55** = Código do Brasil
- **11** = DDD de São Paulo (substitua pelo DDD correto)
- **999999999** = Número do telefone (9 dígitos para celular)

### Exemplos:
- Para São Paulo (11): `5511987654321`
- Para Rio de Janeiro (21): `5521987654321`
- Para Belo Horizonte (31): `5531987654321`

### Como Funciona
Quando o cliente preenche o formulário e clica em "Solicitar Orçamento via WhatsApp", o sistema:

1. **Valida** se nome e telefone foram preenchidos
2. **Coleta** todas as informações do formulário
3. **Formata** uma mensagem automática com:
   - Nome do cliente
   - Telefone do cliente
   - Metragem do imóvel selecionada
   - Ambientes escolhidos
4. **Abre** o WhatsApp Web/App com a mensagem pré-formatada
5. **Direciona** para o número configurado da D'Arlin

### Mensagem Automática Gerada
```
Olá! Gostaria de solicitar um orçamento para móveis planejados.

*Dados do cliente:*
• Nome: [Nome preenchido]
• Telefone: [Telefone preenchido]
• Metragem do imóvel: [Opção selecionada]
• Ambientes desejados: [Ambientes marcados]

Aguardo retorno para mais detalhes sobre o projeto.
```

### Após Alterar o Número
1. Salve o arquivo `src/App.jsx`
2. Execute `npm run build` para gerar nova versão
3. Faça o deploy da versão atualizada

### Testando
Para testar se está funcionando:
1. Acesse o site
2. Preencha o formulário
3. Clique em "Solicitar Orçamento via WhatsApp"
4. Verifique se abre o WhatsApp com o número correto e a mensagem formatada

---

**Importante:** Certifique-se de que o número do WhatsApp está ativo e configurado para receber mensagens de clientes.
