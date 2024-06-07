import Mail from '@/assets/contact/mail.png';
import Phone from '@/assets/contact/phone.png';
import Point from '@/assets/contact/point.png';
import '@/components/contactUs/contactUs.css';

type Props = {};

const ContactUs = (props: Props) => {
	return (
		<section className='section section__contact'>
			<div className='flex'>
				<div className='contact__block'>
					<h2 className='title title__contact'>Contact us</h2>
					<h3 className='contact__subtitle'>
						Have an inquiry? We’ll be happy to assist you
					</h3>
					<div className='contact__info flex flex-col'>
						<div className='contact__box flex'>
							<img
								src={Phone}
								alt='icon-phone'
								className='flex flex-center contact-icon'
							/>
							<a href='tel:+923336527366' className='link link__contact'>
								+92 333 6527366
							</a>
						</div>

						<div className='contact__box flex'>
							<img
								src={Mail}
								alt='icon-mail'
								className='flex flex-center contact-icon'
							/>
							<a
								href='mailto:abuzer@greelogix.com'
								className='link link__contact'
							>
								abuzer@greelogix.com
							</a>
						</div>
						<div className='contact__box flex'>
							<img
								src={Point}
								alt='icon-map'
								className='flex flex-center contact-icon'
							/>
							<address className='link__contact'>
								Plot 252, Block L Phase 2 Johar Town, Lahore, PK
							</address>
						</div>
					</div>
				</div>
				<div className='form__block'></div>
			</div>
		</section>
	);
};

export default ContactUs;
