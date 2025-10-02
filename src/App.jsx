import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Phone, Mail, MapPin, Star, ChevronRight, MessageCircle } from 'lucide-react'
import './App.css'

// Importar as imagens
import logoImage from './assets/Fotoprincipal.jpg'
import quemSomosImage from './assets/Quemsomos.jpg'
import projeto1 from './assets/1.jpg'
import projeto2 from './assets/2.jpg'
import projeto3 from './assets/3.jpg'

function App() {
  const abrirWhatsApp = () => {
    const numeroWhatsApp = '5511999999999' // Substitua pelo número real da D'Arlin
    const mensagem = 'Olá! Gostaria de solicitar um orçamento para móveis planejados. Aguardo retorno!'
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`
    window.open(urlWhatsApp, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-red-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src={logoImage} 
                  alt="D'Arlin Marcenaria Moderna" 
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold">D'Arlin</h1>
                  <p className="text-xl opacity-90">Marcenaria Moderna</p>
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Móveis Planejados com Design Moderno e Qualidade Superior
              </h2>
              
              <p className="text-lg opacity-90 leading-relaxed">
                Equipe especializada em marcenaria: qualidade, prazo e personalização garantidos.
              </p>
              
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                onClick={abrirWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp Agora
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Call to Action Card */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Solicite seu Orçamento Gratuito
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg">
                  Entre em contato conosco via WhatsApp e descubra como podemos transformar seu ambiente com móveis planejados de alta qualidade.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg w-full"
                  onClick={abrirWhatsApp}
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Falar no WhatsApp Agora
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  Resposta rápida e atendimento personalizado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Soluções em móveis planejados que valorizam seu imóvel
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Móveis Planejados Sob Medida</h3>
                <p className="text-gray-600">
                  Projetos exclusivos que unem design moderno e funcionalidade, adaptados ao estilo e às necessidades de cada cliente.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Marcenaria de Alta Qualidade</h3>
                <p className="text-gray-600">
                  Produção própria com materiais premium e acabamento refinado, garantindo durabilidade e valorização do imóvel.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Entrega Rápida e Suporte Completo</h3>
                <p className="text-gray-600">
                  Compromisso com prazo de instalação e atendimento pós-venda, oferecendo segurança em todas as etapas do projeto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Quem somos</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Há 8 anos no mercado, a D'Arlin é uma empresa familiar criada por Douglas Arlindo e Juliana Arlindo, 
                  que decidiram realizar sonhos através do seu trabalho.
                </p>
                <p>
                  Especializada na área de marcenaria, a D'Arlin produz móveis planejados e realiza projetos residenciais 
                  e comerciais. Utilizamos materiais de alta qualidade, como madeira maciça, compensado, laminado, MDF e MDP, 
                  em diversos padrões de cores e texturas.
                </p>
                <p>
                  Nossos serviços seguem rigorosamente as normas de qualidade, garantindo segurança e durabilidade, 
                  sempre com garantia e contrato. Oferecemos soluções inteligentes e econômicas para atender às 
                  necessidades de nossos clientes.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={quemSomosImage} 
                alt="Douglas e Juliana Arlindo - Fundadores da D'Arlin" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Projetos</h2>
            <p className="text-gray-600 text-lg">
              Conheça alguns de nossos trabalhos que unem design, funcionalidade e qualidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={projeto1} 
                  alt="Projeto de Cozinha Moderna" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800">Cozinha Moderna</h3>
                <p className="text-gray-600 text-sm">Design contemporâneo com funcionalidade</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={projeto2} 
                  alt="Projeto de Sala Integrada" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800">Sala Integrada</h3>
                <p className="text-gray-600 text-sm">Ambientes conectados e harmoniosos</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={projeto3} 
                  alt="Projeto de Área Gourmet" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800">Área Gourmet</h3>
                <p className="text-gray-600 text-sm">Espaço perfeito para entretenimento</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="orcamento" className="py-16 px-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Transforme seu ambiente com a D'Arlin</h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e descubra como podemos realizar o projeto dos seus sonhos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="h-8 w-8 text-orange-400" />
              <h3 className="font-semibold">Telefone</h3>
              <p className="text-gray-300">(11) 99999-9999</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Mail className="h-8 w-8 text-orange-400" />
              <h3 className="font-semibold">E-mail</h3>
              <p className="text-gray-300">contato@darlin.com.br</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="h-8 w-8 text-orange-400" />
              <h3 className="font-semibold">Localização</h3>
              <p className="text-gray-300">São Paulo, SP</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 text-lg"
            onClick={abrirWhatsApp}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp Agora
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src={logoImage} 
              alt="D'Arlin Marcenaria Moderna" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">D'Arlin Marcenaria Moderna</h3>
              <p className="text-gray-400">Realizando sonhos através da marcenaria</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400">
              © 2024 D'Arlin Marcenaria Moderna. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
