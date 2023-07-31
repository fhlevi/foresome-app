import React from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import InputText from 'components/forms/input-text/input-text';
import Button from 'components/commons/button';
import { RootState } from 'config/redux/wrapper-redux';
import { Inputs } from 'utils/types/input';
import { validateRequired, validateEmail } from 'utils/validations/form-validation';

type PropsType = {
    step: number
}

interface Props {
    onNextStep: (formVal: PropsType) => void;
}

const RegisterWaitlist: React.FC<Props> = ({ onNextStep }) => {
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formVal) => {
        onNextStep({
            ...formVal,
            step: 3
        })
    }

    const { email } = useSelector(
        (state: RootState) => state.SubscribeReducer
    )
    
    return (
        <>
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="w-[720px] text-green-800 text-[65px] font-black">Get early access before the general public.</div>
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="w-full h-auto flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <InputText
                            name={'name'}
                            placeholder="Your Name"
                            variant="primary"
                            className="max-w-[460px]"
                            innerRef={register('name', { validate: { validateRequired } })}
                            errors={errors}
                        />
                        <InputText
                            name={'email'}
                            placeholder="Email Address"
                            variant="primary"
                            className="max-w-[460px]"
                            defaultValue={email}
                            innerRef={register('email', { validate: { validateRequired, validateEmail } })}
                            errors={errors}
                        />
                        <div className="text-black text-lg font-normal leading-[30px]">Device Type:</div>
                        <div className="flex gap-5">
                            <Button
                                label="iOS User"
                                size="md"
                                type="submit"
                                className="left-0 top-[74px] h-[60px] w-[219px]"
                            />
                            <Button
                                label="Android User"
                                size="md"
                                type="submit"
                                className="left-0 top-[74px] h-[60px] w-[219px]"
                                outline
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            label="Submit"
                            size="md"
                            type="submit"
                            className="left-0 top-[74px] h-[60px] w-[460px]"
                        />
                    </div>
                </form>
            </div>
            <div className="w-[688.16px] h-[743.96px]">
                <Image
                    src={'/images/logo/waitlist-register.png'}
                    alt='waitlist-register logo'
                    width={688.16}
                    height={743.96}
                />
            </div>
        </>
    )
}

export default RegisterWaitlist;