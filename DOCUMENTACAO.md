# Site D'Arlin Marcenaria Moderna

## Visão Geral

Este projeto é um site moderno e responsivo desenvolvido para a **D'Arlin Marcenaria Moderna**, uma empresa familiar especializada em móveis planejados e projetos residenciais e comerciais.

## Características do Site

### Design e Estrutura
- **Landing Page moderna** inspirada no site de referência (lp.airam.arq.br)
- **Design responsivo** que se adapta a diferentes dispositivos
- **Cores da marca**: Gradiente laranja/vermelho baseado no logo da D'Arlin
- **Tipografia moderna** e legível
- **Animações suaves** e efeitos de hover

### Seções Principais

#### 1. Hero Section
- Logo da D'Arlin em destaque
- Título principal: "Móveis Planejados com Design Moderno e Qualidade Superior"
- Formulário de orçamento integrado
- Call-to-action proeminente

#### 2. Formulário de Orçamento
- **Campos incluídos:**
  - Nome (obrigatório)
  - Telefone/WhatsApp (obrigatório)
  - Metragem do imóvel (dropdown)
  - Ambientes desejados (checkboxes múltiplos)
- **Validação de formulário** implementada
- **Design responsivo** e intuitivo

#### 3. Seção de Benefícios
- Três cards destacando os diferenciais:
  - Móveis Planejados Sob Medida
  - Marcenaria de Alta Qualidade
  - Entrega Rápida e Suporte Completo

#### 4. Quem Somos
- História da empresa (8 anos no mercado)
- Informações sobre os fundadores Douglas e Juliana Arlindo
- Foto dos proprietários
- Descrição dos materiais e processos utilizados

#### 5. Portfólio de Projetos
- Galeria com 3 projetos principais:
  - Cozinha Moderna
  - Sala Integrada
  - Área Gourmet
- Imagens reais dos trabalhos da D'Arlin
- Efeitos de hover nas imagens

#### 6. Seção de Contato
- Informações de contato (telefone, email, localização)
- Call-to-action final
- Design escuro contrastante

#### 7. Footer
- Logo e informações da empresa
- Copyright e direitos reservados

### Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e desenvolvimento
- **Tailwind CSS** - Framework de estilos
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones
- **Framer Motion** - Animações (preparado para uso)

### Funcionalidades Implementadas

#### Formulário Interativo
- Validação de campos obrigatórios
- Dropdown para seleção de metragem
- Checkboxes para múltiplos ambientes
- Feedback visual ao usuário
- Envio de dados (console.log implementado)

#### Responsividade
- Layout adaptativo para desktop, tablet e mobile
- Grid system responsivo
- Imagens otimizadas
- Tipografia escalável

#### Performance
- Imagens otimizadas e comprimidas
- CSS minificado
- JavaScript otimizado
- Lazy loading preparado

### Estrutura de Arquivos

```
darlin-marcenaria/
├── public/
├── src/
│   ├── assets/
│   │   ├── 1.jpg (Projeto Cozinha)
│   │   ├── 2.jpg (Projeto Sala)
│   │   ├── 3.jpg (Projeto Área Gourmet)
│   │   ├── Fotoprincipal.jpg (Logo)
│   │   └── Quemsomos.jpg (Foto dos proprietários)
│   ├── components/ui/ (Componentes shadcn/ui)
│   ├── App.jsx (Componente principal)
│   ├── App.css (Estilos personalizados)
│   └── main.jsx (Entry point)
├── dist/ (Build de produção)
└── package.json
```

### Melhorias Futuras Sugeridas

1. **Integração com Backend**
   - API para envio de formulários
   - Sistema de CRM para leads
   - Banco de dados para armazenar contatos

2. **Funcionalidades Adicionais**
   - Galeria expandida de projetos
   - Sistema de depoimentos
   - Blog/artigos sobre marcenaria
   - Calculadora de orçamento online

3. **SEO e Marketing**
   - Meta tags otimizadas
   - Schema markup
   - Google Analytics
   - Pixel do Facebook

4. **Performance**
   - Lazy loading de imagens
   - Service Worker para cache
   - Otimização de Core Web Vitals

## Informações da Empresa

**D'Arlin Marcenaria Moderna**
- **Fundadores**: Douglas Arlindo e Juliana Arlindo
- **Tempo de mercado**: 8 anos
- **Especialidade**: Móveis planejados, projetos residenciais e comerciais
- **Materiais**: Madeira maciça, compensado, laminado, MDF, MDP
- **Diferenciais**: Qualidade, garantia, contrato, soluções inteligentes e econômicas

## Contato de Desenvolvimento

Site desenvolvido utilizando as melhores práticas de desenvolvimento web moderno, com foco em performance, acessibilidade e experiência do usuário.

---

*Documentação criada em outubro de 2024*
