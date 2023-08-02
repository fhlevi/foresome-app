import React from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Router from 'next/router';
import { RootState } from 'config/redux/wrapper-redux';
import { validateRequired, validateEmail } from 'utils/validations/form-validation';
import { Inputs } from 'utils/types/input'
import { setSubscription } from 'slices/subscribe';
import InputText from 'components/forms/input-text/input-text';
import Button from 'components/commons/button';
import WrapperWaitlist from 'components/wrappers/wrapper-waitlist';
import Title from 'components/abstracts/title';

type Props = {}

const RegisterPage = ({ }: Props) => {
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();
    const dispatch: Dispatch<any> = useDispatch();

    const onSubmit: SubmitHandler<Inputs> = (formVal) => {
        const data = {
            ...formVal,
            step: 3
        }

        dispatch(setSubscription(data));

        Router.push('/waitlist/success')
    }

    const { email } = useSelector(
        (state: RootState) => state.SubscribeReducer
    )

    return (
        <>
            <Title content="Register Waitlist" />
            
            <WrapperWaitlist>
                <div className="flex flex-col gap-3 xl:items-center xl:justify-center">
                    <div className="xl:w-[720px] text-green-800 text-[50px] xl:text-[65px] text-center xl:text-left font-black">Get early access before the general public.</div>
                    <form noValidate onSubmit={handleSubmit(onSubmit)} className="w-full h-auto flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <InputText
                                name={'name'}
                                placeholder="Your Name"
                                variant="primary"
                                className="!w-full xl:!max-w-[460px]"
                                innerRef={register('name', { validate: { validateRequired } })}
                                errors={errors}
                            />
                            <InputText
                                name={'email'}
                                placeholder="Email Address"
                                variant="primary"
                                className="!w-full xl:!max-w-[460px]"
                                defaultValue={email}
                                innerRef={register('email', { validate: { validateRequired, validateEmail } })}
                                errors={errors}
                            />
                            <div className="text-black text-lg font-normal leading-[30px]">Device Type:</div>
                            <div className="flex gap-5">
                                <Button
                                    label="iOS User"
                                    size="md"
                                    className="w-[219px] h-[53px] xl:h-[60px]"
                                />
                                <Button
                                    label="Android User"
                                    size="lg"
                                    className="w-[219px] h-[53px] xl:h-[60px]"
                                    outline
                                />
                            </div>
                        </div>
                        <div>
                            <Button
                                label="Submit"
                                size="lg"
                                type="submit"
                                className="w-full xl:max-w-[460px] h-[60px]"
                            />
                        </div>
                    </form>
                </div>
                <div className="xl:w-[688.16px] xl:h-[743.96px]">
                    <Image
                        src={'/images/logo/waitlist-register.png'}
                        alt='waitlist-register logo'
                        width={688.16}
                        height={743.96}
                    />
                </div>
            </WrapperWaitlist>
        </>
    )
}

export default RegisterPage