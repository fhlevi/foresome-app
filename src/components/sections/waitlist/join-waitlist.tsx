import React from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form';
import InputText from 'components/forms/input-text/input-text';
import Button from 'components/commons/button';
import { Inputs } from 'utils/types/input';
import { validateRequired, validateEmail } from 'utils/validations/form-validation';

type PropsType = {
    step: number
}

interface Props {
    onNextStep: (formVal: PropsType) => void;
}

const JoinWaitList: React.FC<Props> = ({ onNextStep }) => {
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formVal) => {
        onNextStep({
            ...formVal,
            step: 2
        })
    }
    
    return (
        <>
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="w-[720px] text-green-800 text-[65px] font-black">Join the waitlist and be the first to be notified once we`ve launched</div>
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="w-full h-[123px] flex flex-row gap-3">
                    <div>
                        <InputText
                            name={'email'}
                            placeholder="Your Email"
                            variant="primary"
                            className="max-w-[460px]"
                            innerRef={register('email', { validate: { validateRequired, validateEmail } })}
                            errors={errors}
                        />
                    </div>
                    <div>
                        <Button
                            label="Join Waitlist"
                            size="md"
                            type="submit"
                            className="left-0 top-[74px] h-[60px] min-w-[169px] w-auto"
                        />
                    </div>
                </form>
            </div>
            <div className="w-[383.48px] h-[743.96px]">
                <Image
                    src={'/images/logo/waitlist-join.png'}
                    alt='waitlist-join logo'
                    width={383.48}
                    height={743.96}
                />
            </div>
        </>
    )
}

export default JoinWaitList