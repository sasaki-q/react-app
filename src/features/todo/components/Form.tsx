import { Grid } from "@mui/material";
import { MyButton } from "components/atoms/Button";
import { MyForm } from "components/atoms/Form";
import { useAuth } from "lib/auth";
import { memo } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreate } from "../hooks/useCreate";

type Form = {
    title: string
}

const View = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const { user } = useAuth();
  const createMutation = useCreate();
  
  const onSubmit: SubmitHandler<Form> = (data) => createMutation.mutateAsync({
      uid: user!.id,
      title: data.title,
  });

  return (
    <Grid container spacing={2} sx={{my: 10}}>
      <Grid item xs={2} />
      <Grid item xs={6}>
        <MyForm
            id="title"
            required 
            label={"title"} 
            type={"text"} 
            minWidth={700}
            registration={
              register(
                "title",{
                  required: 'password is required',
                  minLength: {
                    value: 8,
                    message: "at least eight characters"
                  },
              })
            }
            error={errors.title}
        />
      </Grid>
      <Grid item xs={2}>
        <MyButton 
          title={"create task"}
          size={"large"}
          onclick={handleSubmit(onSubmit)}
        />
      </Grid>
    </Grid>
  )
}

export const CreateTaskForm = memo(View);
