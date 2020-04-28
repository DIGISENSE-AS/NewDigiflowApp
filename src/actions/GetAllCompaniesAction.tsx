export const GetAllCompaniesAction = (userId:any) => {
  return(async (dispatch) =>{
    const companies = await [{name: "Muldjord R' us" }, {name: "Al quaeda"}, {name: 'the techno union of mars'}]

    dispatch({
      type: 'AllCompanies',
      payload: await companies
    })
  })
}