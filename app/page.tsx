import './globals.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Footer from '@/app/components/footer';
import Chip from '@mui/material/Chip';
import Nav from '@/app/components/Nav';

const featureIcons = [
  'https://www.figma.com/api/mcp/asset/5fe9ce55-69b1-481d-9088-fb91ee3fe3b3.svg',
  'https://www.figma.com/api/mcp/asset/9df3f29c-c67f-4c50-b338-3a8438b02d30.svg',
  'https://www.figma.com/api/mcp/asset/28953a29-ca9c-437a-a1ae-bca5f890f589.svg',
  'https://www.figma.com/api/mcp/asset/f033c49c-5db0-4320-a106-7060d5945937.svg',
  'https://www.figma.com/api/mcp/asset/1208f8d4-9332-435f-be2c-94dfd08ba568.svg',
  'https://www.figma.com/api/mcp/asset/c5e3390b-4c3f-40b9-8767-cf5902103b57.svg',
];

const featureData = [
  [
    'Manage Documents',
    'Compose accurate, on-brand documents',
    'Store and manage documents',
    'Summarize, edit and refine content',
  ],
  [
    'Streamline your Inbox',
    'Summarize emails in seconds',
    'Gain valuable insight at a glance',
    'Edit, delete and draft new responses',
  ],
  [
    'Recap Meetings',
    'Auto-summarize calls and live sessions.',
    'Document key insights and decision.',
    'Generate clear, shareable action items.',
  ],
  [
    'Extract Insight',
    'Extract data from Docs and Images',
    'Restructure and organize data.',
    'Seamlessly analyze and export data',
  ],
  [
    'Automate Repetitive Tasks',
    'Convert emails into action items',
    'Turn meeting notes into task workflows',
    'Eliminate time-consuming routines',
  ],
  [
    'Connect Tools and Apps',
    'Recap meetings from Zoom',
    'Document key insights and decision',
    'Export and store data in Google Suite',
  ],
];

const useCases = [
  [
    'Project Management',
    'From sprint planning to stakeholder updates — automate time-consuming tasks and keep every project on track.',
  ],
  [
    'Research & Development',
    'Accelerate research, simplify documentation, and turn complex findings into clear, actionable insights.',
  ],
  [
    'Professional Services',
    'Summarize contracts, compose client deliverables, automate reporting, and streamline client communication.',
  ],
];

const buttonSx = {
  borderRadius: '24px',
  px: '22px',
  py: '8px',
  fontSize: '15px',
  fontWeight: 500,
  letterSpacing: '0.46px',
  textTransform: 'uppercase',
};

// Section heading component
function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          color: 'var(--text-disabled)',
          fontSize: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.46px',
        }}
      >
        {eyebrow}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '28px', md: '32px' },
          fontWeight: 400,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'var(--text-secondary)',
          fontSize: { xs: '16px', md: '20px' },
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}

// Feature card component
function FeatureCard({ feature, index }: { feature: string[]; index: number }) {
  return (
    <Box
      sx={{
        height: { xs: 'auto', sm: 'auto', md: '100%' },
        p: '24px',
        bgcolor: 'var(--background-primary)',
        border: '1px solid var(--stroke-dark)',
        borderRadius: '16px',
      }}
    >
      <Stack
        spacing="24px"
        sx={{ height: '100%' }}
      >
        <Box
          component="img"
          src={featureIcons[index]}
          alt=""
          sx={{ width: '48px', height: '48px' }}
        />
        <Stack spacing="16px">
          <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>
            {feature[0]}
          </Typography>
          <Box
            component="ol"
            sx={{
              m: 0,
              color: 'var(--text-secondary)',
              fontSize: '16px',
            }}
          >
            {feature.slice(1).map((item) => (
              <Box
                component="li"
                key={item}
                sx={{ lineHeight: 'normal' }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

// Primary page component
export default function HomePage() {
  return (
    <Box
      component="main"
      sx={{ overflow: 'hidden' }}
    >
      <Nav />
      <Box
        component="section"
        sx={{
          pt: { xs: '48px', md: '64px' },
          px: { xs: '16px', sm: '16px', md: '24px' },
          pb: { xs: '24px', sm: '24px', md: '24px' },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pb: '24px',
          }}
        >
          <Chip
            label="Inference native architecture"
            variant="outlined"
            sx={{
              textTransform: 'uppercase',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.46px',
              color: 'rgba(0,0,255,0.6)',
              borderColor: 'rgba(0,0,255,0.24)',
              bgcolor: 'rgba(0,0,255,0.06)',
              borderRadius: '24px',
            }}
          />

          <Stack
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '32px', sm: '40px', md: '48px' },
                fontWeight: 400,
              }}
            >
              The Ultimate{' '}
              <Box
                component="span"
                sx={{ color: 'var(--accent-primary)' }}
              >
                AI Productivity Platform
              </Box>
            </Typography>
            <Typography
              sx={{
                color: 'var(--text-secondary)',
                fontSize: { xs: '16px', sm: '20px', md: '24px' },
              }}
            >
              AI workspace built for professionals. One platform — endless
              possibilities.
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={'12px'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Button
              href="sign-up"
              variant="contained"
              sx={{
                ...buttonSx,
                bgcolor: 'var(--background-secondary)',
                '&:hover': {
                  bgcolor: 'var(--background-secondary)',
                  opacity: '0.9',
                },
              }}
            >
              GET STARTED
            </Button>
            <Button
              href="/product"
              variant="outlined"
              sx={{
                ...buttonSx,
                color: 'var(--background-secondary)',
                borderColor: 'var(--background-secondary)',
              }}
            >
              LEARN MORE
            </Button>
          </Stack>
        </Stack>

        <Box
          sx={{
            height: { xs: '220px', sm: '360px', md: '460px' },
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: '100%',
              bgcolor: 'var(--background-secondary)',
              border: '1px solid var(--stroke-dark)',
              borderRadius: '16px',
            }}
          />
        </Box>
      </Box>

      {/* Features Section */}
      <Box
        component="section"
        id="features"
        sx={{
          px: { xs: '16px', sm: '16px', md: '64px' },
          py: { xs: '24px', sm: '48px', md: '64px' },
          width: '100%',
        }}
      >
        <Stack sx={{ pb: '48px' }}>
          <SectionHeading
            eyebrow="FEATURES"
            title="Supercharge Your Workflow"
            description="Automate tasks — 10× faster with enterprise-grade AI"
          />
        </Stack>
        <Grid
          container
          spacing="8px"
        >
          {featureData.map((feature, index) => (
            <Grid
              key={feature[0]}
              size={{ xs: 12, sm: 6, md: 4 }}
            >
              <FeatureCard
                feature={feature}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Use Cases Section */}
      <Box
        sx={{
          px: { xs: '16px', sm: '16px', md: '64px' },
          py: { xs: '24px', sm: '48px', md: '64px' },
          width: '100%',
        }}
      >
        <Stack sx={{ pb: '48px' }}>
          <SectionHeading
            eyebrow="USE-CASES"
            title="Real-world Applications"
            description="Industry-agnostic productivity toolkit."
          />
        </Stack>
        <Stack>
          {useCases.map(([title, description], index) => (
            <Box
              key={title}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: '24px', sm: '24px', md: '48px' },
                pb: { xs: '24px', sm: '24px', md: '0px' },
                alignItems: 'center',
                minHeight: { sm: '268px' },
                bgcolor:
                  index % 2 ? 'var(--background-primary)' : 'var(--white)',
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', sm: '40%', md: '40%' },
                  height: { xs: '220px', sm: '220px', md: '220px' },
                  flexShrink: 0,
                  bgcolor: 'var(--background-secondary)',
                  borderRadius: '16px',
                }}
              />
              <Stack spacing="24px">
                <Typography
                  sx={{ fontSize: { xs: '24px', md: '24px' }, fontWeight: 400 }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    fontSize: { xs: '16px', sm: '16px', md: '16px' },
                  }}
                >
                  {description}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* <Stack
        sx={{
          px: { xs: '16px', sm: '16px', md: '64px' },
          py: { xs: '24px', sm: '48px', md: '64px' },
          width: '100%',
          bgcolor: 'orange',
        }}
      >
        {useCases.map(([title, description], index) => (
          <Box
            key={title}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: '24px', sm: '24px', md: '48px' },
              alignItems: 'center',
              px: { xs: '16px', sm: '16px', md: '24px' },
              py: '24px',
              minHeight: { sm: '268px' },
              bgcolor: index % 2 ? 'var(--background-primary)' : 'var(--white)',
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', sm: '50%', md: '50%' },
                height: { xs: '220px', sm: '220px', md: '220px' },
                flexShrink: 0,
                bgcolor: 'var(--background-secondary)',
                borderRadius: '16px',
              }}
            />
            <Stack spacing="24px">
              <Typography
                sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 500 }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: 'var(--text-secondary)',
                  fontSize: { xs: '16px', sm: '18px', md: '24px' },
                }}
              >
                {description}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Stack> */}

      <Box
        sx={{ p: { xs: '24px 8px', sm: '48px 16px', md: '64px 24px 48px' } }}
      >
        <Box
          sx={{
            p: { xs: '8px', sm: '16px', md: '24px' },
            bgcolor: 'black',
            borderRadius: '16px',
            color: 'var(--white)',
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            spacing={{ xs: '24px', md: '48px' }}
            sx={{ alignItems: 'center' }}
          >
            <Box
              sx={{
                flex: 1,
                width: '100%',
                height: { xs: '220px', sm: '260px', md: '400px' },
                bgcolor: 'var(--background-secondary)',
                border: '1px solid var(--stroke-light)',
                borderRadius: '16px',
              }}
            />

            <Stack
              spacing="24px"
              sx={{ flex: 1 }}
            >
              <Typography
                sx={{
                  color: 'var(--text-light-secondary)',
                  fontSize: '16px',
                }}
              >
                BENCHMARKS
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '24px', sm: '32px', md: '40px' },
                  fontWeight: 500,
                }}
              >
                Built for performance and Scale
              </Typography>
              <Box
                component="ul"
                sx={{
                  m: 0,
                  pl: '24px',
                  color: 'var(--text-light-secondary)',
                  fontSize: { xs: '12px', sm: '16px', md: '18px' },
                }}
              >
                {[
                  '316 t/s throughput and 0.3s TTFT',
                  '99.9% uptime with automatic model failover',
                  '6 integrated AI models across a single platform',
                  'Saves 3+ hrs a week per task',
                  '10x faster than manual workflow processing',
                  '86.0% accuracy — across NLP benchmarks',
                ].map((item) => (
                  <Box
                    component="li"
                    key={item}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{ p: { xs: '24px 8px', sm: '48px 16px', md: '64px 24px 48px' } }}
      >
        <Box
          sx={{
            minHeight: { xs: '380px', sm: '480px', md: '600px' },
            display: 'flex',
            alignItems: 'flex-end',
            bgcolor: 'var(--background-secondary)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <Stack
            spacing="24px"
            sx={{
              width: '100%',
              p: '24px 16px',
              bgcolor: 'var(--black)',
              color: 'var(--white)',
            }}
          >
            <Typography
              sx={{ color: 'var(--text-light-secondary)', fontSize: '16px' }}
            >
              Jan 10, 2026
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '24px', sm: '32px', md: '40px' },
                fontWeight: 500,
              }}
            >
              AI is reshaping the software industry
            </Typography>
            <Typography
              sx={{
                color: 'var(--text-light-secondary)',
                fontSize: { xs: '14px', sm: '18px', md: '24px' },
              }}
            >
              Exploring the shift from rigid enterprise platforms to adaptive,
              AI-driven solutions and what it means for businesses still relying
              on traditional ERP systems.
            </Typography>
            <Stack
              direction="row"
              spacing="8px"
            >
              <Button
                variant="outlined"
                sx={{
                  ...buttonSx,
                  fontSize: { xs: '11px', md: '15px' },
                  color: 'var(--white)',
                  borderColor: 'var(--white)',
                }}
              >
                Read article
              </Button>
              <Button
                variant="contained"
                sx={{
                  ...buttonSx,
                  fontSize: { xs: '11px', md: '15px' },
                  color: 'var(--black)',
                  bgcolor: 'var(--white)',
                }}
              >
                View blog
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
