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

        router.push('/waitlist/register')
    }

    return (
        <div className="w-full xl:max-w-[1480.48px] h-auto xl:h-[456.92px] relative bg-green-800 rounded-[20px]">
            <div className="left-0 top-[0.06px] opacity-40 pointer-events-none">
                <Image
                    src="/images/banner/signup-banner.png"
                    alt="signup-banner Logo"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col h-full xl:flex-row gap-5 xl:gap-20 py-[50px] xl:py-[109px] px-5 xl:px-32">
                <div className="flex flex-col">
                    <div className="text-white text-[35px] xl:text-[50px] font-black">
                        Sign up for the newsletter today.
                    </div>
                    <div className="text-white text-base xl:text-lg font-normal xl:leading-[30px]">
                        Get launch updates and be the first to know when Foresome is live in
                        your area. Make the most of vacations, business trips, time off, or
                        the weekend at home with Foresome, golf’s only compatibility app.
                    </div>
                </div>
                <div className="flex xl:items-center xl:justify-center">
                    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[14px] w-full">
                        <InputText
                            name={'email'}
                            placeholder="Your Email"
                            innerRef={register('email', { validate: { validateRequired, validateEmail } })}
                            errors={errors}
                            className="!w-full xl:!w-[474px]"
                        />
                        <Button
                            label="Subscribe"
                            outline={false}
                            variant="neutral"
                            size="lg"
                            disabled={false}
                            type="submit"
                            className="w-full xl:max-w-[169px] h-[49px]"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
