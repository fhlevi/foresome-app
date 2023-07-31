import React from 'react'
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import router from 'next/router';

import InputText from 'components/forms/input-text/input-text';
import Button from 'components/commons/button';
import { setSubscription } from 'slices/subscribe';
import { Inputs } from 'utils/types/input';
import { validateRequired, validateEmail } from 'utils/validations/form-validation';

export default function SignupHome() {
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();
    const dispatch: Dispatch<any> = useDispatch();

    const onSubmit: SubmitHandler<Inputs> = (formVal) => {
        const data = {
            ...formVal,
            step: 2
        }

        dispatch(setSubscription(data));

        router.push('/waitlist/join')
    }

    return (
        <div className="w-full max-w-[1480.48px] h-[456.92px] relative">
            <div className="w-full max-w-[1480.48px] h-[456.86px] left-0 top-[0.06px] absolute rounded-[20px] bg-green-800" />
            <Image
                className="left-0 top-[0.06px] absolute rounded-[20px] opacity-40"
                src="/images/banner/signup-banner.png"
                alt="signup-banner Logo"
                width={1480.48}
                height={456.86}
            />
            <div className="w-[594.73px] left-[165.23px] top-[115.46px] absolute text-white text-[50px] font-black">
                Sign up for the newsletter today.
            </div>
            <div className="w-[545.54px] left-[165.23px] top-[261.46px] absolute text-white text-lg font-normal leading-[30px]">
                Get launch updates and be the first to know when Foresome is live in
                your area. Make the most of vacations, business trips, time off, or
                the weekend at home with Foresome, golf’s only compatibility app.
            </div>
            <form noValidate onSubmit={handleSubmit(onSubmit)} className="w-[474px] h-[123px] left-[850.77px] top-[166.85px] absolute">
                <InputText
                    name={'email'}
                    placeholder="Your Email"
                    innerRef={register('email', { validate: { validateRequired, validateEmail } })}
                    errors={errors}
                />
                <Button
                    label="Subscribe"
                    outline={false}
                    variant="neutral"
                    size="md"
                    disabled={false}
                    type="submit"
                    className="left-0 top-[74px] absolute"
                />
            </form>
        </div>
    )
}
