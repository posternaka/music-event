import Mail from '@/assets/contact/mail.png';
import Phone from '@/assets/contact/phone.png';
import Point from '@/assets/contact/point.png';
import '@/components/contactUs/contactUs.css';

type Props = {};

const ContactUs = (props: Props) => {
	return (
		<section id='contact' className='section section__contact'>
			<div className='wrapper__contact flex'>
				<div className='contact__block'>
					<h2 className='title title__contact'>Contact us</h2>
					<h3 className='contact__subtitle'>
						Have an inquiry? We’ll be happy to assist you
					</h3>
					<div className='contact__info flex flex-col'>
						<div className='contact__box flex'>
							<a
								href='tel:+923336527366'
								className='link link__contact flex flex-center'
							>
								<img src={Phone} alt='icon-phone' className='contact-icon' />
								<span>+92 333 6527366</span>
							</a>
						</div>

						<div className='contact__box flex'>
							<a
								href='mailto:abuzer@greelogix.com'
								className='link link__contact flex flex-center'
							>
								<img src={Mail} alt='icon-mail' className='contact-icon' />
								<span>abuzer@greelogix.com</span>
							</a>
						</div>
						<div className='contact__box flex'>
							<address className='link__contact flex flex-center'>
								<img src={Point} alt='icon-map' className='contact-icon' />
								<span>Plot 252, Block L Phase 2 Johar Town, Lahore, PK</span>
							</address>
						</div>
					</div>
				</div>
				<div className='form__block flex'>
					<form action='' method='post' className='form flex flex-col'>
						<p className='form__title'>Fill in your details</p>

						<div className='form__inputs flex flex-col'>
							<label htmlFor='name'>
								<span className='form__attribute'>Name</span>
								<input
									type='text'
									name='name'
									id='name'
									placeholder='Michael Carrick'
									className='form__input'
								/>
							</label>
							<label htmlFor='email'>
								<span className='form__attribute'>Email</span>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='m.carrick@gmail.com'
									className='form__input'
								/>
							</label>
							<label htmlFor='message'>
								<span className='form__attribute'>Message</span>
								<textarea
									name='message'
									id='message'
									placeholder='This makes me delighted. I am ready to offer you cooperation.'
									className='form__input form__message'
									maxLength={100}
								></textarea>
							</label>
						</div>

						<button type='submit' className='button button--main'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
