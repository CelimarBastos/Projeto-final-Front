import { Logo } from '../Logo/Logo';
import { FooterInfo } from './FooterInfo';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const aboutLinks = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Blog', link: '/blog' },
    { text: 'Carreiras', link: '/careers' },
    { text: 'Imprensa', link: '/press' },
  ];

  const supportLinks = [
    { text: 'Contato', link: '/contact' },
    { text: 'Políticas de Privacidade', link: '/privacy' },
    { text: 'Termos de Serviço', link: '/terms' },
    { text: 'FAQ', link: '/faq' },
  ];

  const socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'instagram', url: '#' },
    { icon: 'twitter', url: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <Logo white={true} />
          <p className="footer-description">
            Bem-vindo à Drip Store! Sua melhor escolha para roupas e acessórios
            de qualidade. Conheça nossa coleção exclusiva e aproveite nossas
            promoções especiais. Estamos aqui para oferecer o melhor para você.
          </p>
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.url}
                className={`social-icon social-icon-${social.icon}`}
                aria-label={social.icon}
              >
                <img 
                  src={`/${social.icon}.svg`} 
                  alt={social.icon}
                  width="24"
                  height="24"
                />
              </a>
            ))}
          </div>
        </div>

        <FooterInfo title="Sobre" informations={aboutLinks} />
        <FooterInfo title="Suporte" informations={supportLinks} />
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Drip Store. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
