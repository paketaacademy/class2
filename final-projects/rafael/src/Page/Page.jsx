import Input from "../Components/Input/Input"
import Menu from "../Components/Menu/Menu"
import AvatarUser from '../Components/DetailsUser/AvatarUser'
import { PageContainer, Box } from './style.js'
import LinksUser from "../Components/DetailsUser/LinksUser"
import Socialuser from "../Components/DetailsUser/SocialUser"
import InfoUser from "../Components/DetailsUser/InfoUser"
import Detailsuser from "../Components/DetailsUser/DetailsUser"

function Page() {
  const
    city = 'Porto Alegre',
    twitter = 'Underfined',
    gitHub = 'Underfined',
    workplace = 'Paketá',
    info = 'This profile has no bio',
    name = 'TheOctocat',
    user = '@octocat'

  return (
    <PageContainer>
      <Menu />
      <Input />
      <Box>
        <div>
          <AvatarUser />
        </div>
        <div>
          <Detailsuser name={name} user={user}/>
          <InfoUser info={info}/>
          <Socialuser />
          <LinksUser city={city} twitter={twitter} gitHub={gitHub} workplace={workplace} />
        </div>
      </Box>
    </PageContainer>
  );
}

export default Page
